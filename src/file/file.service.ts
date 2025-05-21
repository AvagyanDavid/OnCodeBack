import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { UpdateFileDto } from 'src/dto/update_file.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FileService {
    private readonly filePath = 'src/file/code.txt';

    constructor(private readonly prismaService: PrismaService){};

    async updateFile(dto: UpdateFileDto): Promise<void> {
        try {
          // Чтение текущего содержимого файла
          const content = await fs.readFile(this.filePath, 'utf-8');
          console.log('Content', content);
          let lines = content.split('\n');
          console.log('Lines', lines);

          // Проверка корректности номера строки
          if (dto.lineNumber > lines.length) {
            const linesToAdd = dto.lineNumber - lines.length;
            lines = lines.concat(Array(linesToAdd).fill(''));
            // throw new Error(`Строка ${dto.lineNumber} не существует в файле`);
          }

          // Получение строки для редактирования (нумерация с 1, поэтому -1)
          const lineIndex = dto.lineNumber - 1;
          const currentLine = lines[lineIndex];

            // Проверка диапазона
          if (
            dto.range.start < 0 ||
            dto.range.end > currentLine.length ||
            dto.range.start > dto.range.end
          ) {
              console.log(dto.range.start);
              console.log(dto.range.end);
              console.log(currentLine.length);
              throw new Error('Некорректный диапазон изменений');
            }

          // Замена части строки
          const updatedLine =
            currentLine.slice(0, dto.range.start) +
            dto.text +
            currentLine.slice(dto.range.end);
          lines[lineIndex] = updatedLine;

          // Сохранение обновленного содержимого
          const updatedContent = lines.join('\n');
          await fs.writeFile(this.filePath, updatedContent, 'utf-8');
        } catch (error) {
            throw new Error(`Ошибка при обновлении файла: ${error.message}`);
        }
    }

    async readFile(): Promise<string> {
        try {
            return await fs.readFile(this.filePath, 'utf-8');
        } catch (error) {
            throw new Error(`Ошибка при чтении файла: ${error.message}`);
        }
    }

    // async sendMessage (dto: SendMessageDto){
    //     const {text} = dto
        
    //     const message = await this.prismaService.message.create({
    //         data: {
    //             text,
    //         },
    //     });
    //     return message;
    // }







}
