import { ComponentRef, Type } from "@angular/core";
import { Routes } from "@angular/router";

export interface IStoryConfig {
    modules: IStoryModule[];
}

export interface IStoryModule {
    components: Type<ComponentRef<any>>[];
    module: string;
}