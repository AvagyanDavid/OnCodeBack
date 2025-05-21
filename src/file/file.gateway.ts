import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { FileService } from './file.service';
import { Server, Socket } from 'socket.io';
import { UpdateFileDto } from 'src/dto/update_file.dto';
import * as fs from 'fs/promises';
import { Hub } from './hub';

@WebSocketGateway()
export class FileGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  
  constructor(private readonly fileService: FileService, private hub: Hub) {}
  
  async handleConnection(client:Socket){
    console.log('Client connected ', client.id);
    this.hub.add(client);

    try{
      // Отправляем текущее содержимое файла при подключении
      const fileContent = await this.fileService.readFile();
      client.emit('fileContent', fileContent);
    } catch (error) {
      client.emit('error', error.message);
    }

    // try {
    //   // Чтение файла
    //   const filePath = './code.txt'; // Укажите путь к файлу
    //   const fileContent = await fs.readFile(filePath, 'utf-8');
    //   console.log('File content:', fileContent);

    //   // Например, отправка содержимого файла клиенту
    //   client.emit('fileContent', fileContent);
    // } catch (error) {
    //   console.error(`Ошибка при чтении файла: ${error.message}`);
    //   client.emit('error', `Не удалось прочитать файл: ${error.message}`);
    // }
    
  }

  handleDisconnect(client: Socket){
    this.hub.clients.delete(client)
    console.log('Client disconnected ', client.id)
  }

  @SubscribeMessage('updateFile')
  async handleUpdateFile(client: Socket, dto: UpdateFileDto) {
    try {
      await this.fileService.updateFile(dto);
      const updatedContent = await this.fileService.readFile();
      console.log(updatedContent)
      this.hub.clients.forEach((v, k) => {
        k.emit('fileContent', updatedContent);
        k.emit('succes', 'Файл успешно обновлен');
      });
    } catch (error) {
      client.emit('error', error.message);
    }
  }


  // @SubscribeMessage('send')
  // async test(@MessageBody() dto: SendMessageDto){
  //   const message = await this.fileSevice.sendMessage(dto);

  //   this.server.emit('messages', dto);

  //   return message;
  // }
}