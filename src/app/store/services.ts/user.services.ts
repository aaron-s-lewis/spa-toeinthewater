import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { apiBase } from "../constants/base.contants";
import { UserModel } from "src/app/user.model";

@Injectable({ providedIn: "root" })
export class UserProfileService {
    private base: string;

    public constructor(public http: HttpClient) {
        this.base = apiBase;
    }

    public submitApplication$(data: UserModel) {
        return this.http.post(`${this.base}/CreateUserProfile`, data);
    }
}
