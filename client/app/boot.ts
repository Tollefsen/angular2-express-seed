/// <reference path="../typings/browser.d.ts"/>

import {bootstrap} from "@angular/platform-browser-dynamic";
import {App} from "./app";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {HTTP_PROVIDERS} from "@angular/http";

bootstrap(App, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
