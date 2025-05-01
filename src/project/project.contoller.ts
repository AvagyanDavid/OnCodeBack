import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ProjectService } from "./project.service";

@Controller()
export class ProjectController {
    constructor(private readonly projectService: ProjectService){}

    @Get()
    findAll(@Param('id') id: number){
        return this.projectService.findAll(Number(+id));
    }

    @Get()
    findOne(@Param('id') id: number){
        return this.projectService.findOne(Number(+id));
    }

    @Post()
    create(@Body() name: string, id: number) {
        return this.projectService.create(id, name)
    }

    @Put(':id')
    update(@Param('id') id:number){
        return this.projectService.remove(Number(+id))
    }
}