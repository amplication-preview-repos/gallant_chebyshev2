import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PerformerService } from "./performer.service";
import { PerformerControllerBase } from "./base/performer.controller.base";

@swagger.ApiTags("performers")
@common.Controller("performers")
export class PerformerController extends PerformerControllerBase {
  constructor(
    protected readonly service: PerformerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
