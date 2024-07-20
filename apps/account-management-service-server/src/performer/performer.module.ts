import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PerformerModuleBase } from "./base/performer.module.base";
import { PerformerService } from "./performer.service";
import { PerformerController } from "./performer.controller";
import { PerformerResolver } from "./performer.resolver";

@Module({
  imports: [PerformerModuleBase, forwardRef(() => AuthModule)],
  controllers: [PerformerController],
  providers: [PerformerService, PerformerResolver],
  exports: [PerformerService],
})
export class PerformerModule {}
