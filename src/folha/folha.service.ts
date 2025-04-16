import { Global, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Global()
@Injectable()
export class FolhasService {
    constructor(
        private prisma: PrismaService
    ) { }


}