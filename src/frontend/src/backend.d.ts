import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    id: bigint;
    projectType: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface backendInterface {
    getContacts(): Promise<Array<ContactSubmission>>;
    submitContact(name: string, email: string, projectType: string, message: string): Promise<{
        __kind__: "ok";
        ok: string;
    } | {
        __kind__: "err";
        err: string;
    }>;
}
