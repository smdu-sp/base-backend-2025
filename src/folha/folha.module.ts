import { Module } from "@nestjs/common";
import { FolhasController } from "./folha.controller";
import { FolhasService } from "./folha.service";

@Module({
    controllers: [FolhasController],
    providers: [FolhasService],
    exports: [FolhasService]
})
export class FolhasModule { }