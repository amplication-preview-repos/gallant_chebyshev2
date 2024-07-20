import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerformerServiceBase } from "./base/performer.service.base";

@Injectable()
export class PerformerService extends PerformerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
