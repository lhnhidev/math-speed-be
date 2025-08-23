import type {
  Context,
  UnknownParams,
} from 'openapi-backend';

declare namespace Components {
    namespace Parameters {
        export type AttemptId = string;
        export type QuestionId = string;
    }
    export interface PathParameters {
        questionId: Parameters.QuestionId;
        attemptId: Parameters.AttemptId;
    }
    namespace Schemas {
        /**
         * Câu hỏi
         */
        export interface Question {
            chuDe: {
                chuDe: string;
                level: number;
            };
            cauHoi: string;
            luaChon: {
                noiDung: string;
                dapAn: boolean;
                index: number;
            }[];
            giaiThich: string;
        }
        /**
         * Data transfer object for creating a new Question.
         */
        export interface QuestionCreate {
            chuDe: {
                chuDe: string;
                level: number;
            };
            cauHoi: string;
            luaChon: {
                noiDung: string;
                dapAn: boolean;
                index: number;
            }[];
            giaiThich: string;
        }
        /**
         * Data transfer object for updating all fields of an existing Question (PUT operation).
         */
        export interface QuestionUpdate {
            chuDe: {
                chuDe: string;
                level: number;
            };
            cauHoi: string;
            luaChon: {
                noiDung: string;
                dapAn: boolean;
                index: number;
            }[];
            giaiThich: string;
        }
        /**
         *
         */
        export interface Subject {
            name: string;
            level: /* Câu hỏi */ Question[][];
        }
        /**
         *
         */
        export interface TestAttempt {
            thoiGianLamBai?: number;
            ngayBatDauThi: string;
            luaChon: {
                cauHoi: /* Câu hỏi */ Question;
                chon?: number;
            }[];
        }
        /**
         * A simplified representation of a TestAttempt, typically used in list views.
         */
        export interface TestAttemptSummary {
            thoiGianLamBai: number;
            ngayBatDauThi: string;
            soCauDung: number;
            soCau: number;
        }
        /**
         * Người dùng
         */
        export interface User {
            ho: string;
            ten: string;
            email: string;
            matKhau: string;
            tienDo: {
                capDo: string;
                level: number;
            };
            quyen: "admin" | "user";
        }
        /**
         * Data transfer object for creating a new User.
         */
        export interface UserCreate {
            ho: string;
            ten: string;
            email: string;
            matKhau: string;
            quyen: string;
        }
    }
}
declare namespace Paths {
    namespace CapNhatCauHoi {
        namespace Parameters {
            export type QuestionId = string;
        }
        export interface PathParameters {
            questionId: Parameters.QuestionId;
        }
        export type RequestBody = /* Data transfer object for updating all fields of an existing Question (PUT operation). */ Components.Schemas.QuestionUpdate;
        namespace Responses {
            export type $200 = /* Câu hỏi */ Components.Schemas.Question;
            export interface $401 {
                message: string;
            }
            export interface $403 {
                message: string;
            }
        }
    }
    namespace LietKeLichSuLamBai {
        namespace Responses {
            export type $200 = /* A simplified representation of a TestAttempt, typically used in list views. */ Components.Schemas.TestAttemptSummary;
            /**
             * LietKeLichSuLamBaiUnauthorized
             */
            export interface $401 {
                message: string;
            }
            /**
             * LietKeLichSuLamBaiForbidden
             */
            export interface $403 {
                message: string;
            }
        }
    }
    namespace TaoLichSuLamBai {
        namespace Responses {
            export type $201 = /*  */ Components.Schemas.TestAttempt;
            export interface $401 {
                message: string;
            }
            export interface $403 {
                message: string;
            }
        }
    }
    namespace ThemCauHoi {
        export type RequestBody = /* Data transfer object for creating a new Question. */ Components.Schemas.QuestionCreate;
        namespace Responses {
            export type $201 = /* Câu hỏi */ Components.Schemas.Question;
            export interface $401 {
                message: string;
            }
            export interface $403 {
                message: string;
            }
        }
    }
    namespace ThemNguoiDung {
        export type RequestBody = /* Data transfer object for creating a new User. */ Components.Schemas.UserCreate;
        namespace Responses {
            export type $201 = /* Người dùng */ Components.Schemas.User;
            export interface $401 {
                message: string;
            }
            export interface $403 {
                message: string;
            }
        }
    }
    namespace XoaCauHoi {
        namespace Parameters {
            export type QuestionId = string;
        }
        export interface PathParameters {
            questionId: Parameters.QuestionId;
        }
        namespace Responses {
            /**
             * XoaCauHoiNoContent
             */
            export type $204 = null;
            /**
             * XoaCauHoiUnauthorized
             */
            export interface $401 {
                message: string;
            }
            /**
             * XoaCauHoiForbidden
             */
            export interface $403 {
                message: string;
            }
        }
    }
}


export interface Operations {
  /**
   * POST /users
   */
  ['themNguoiDung']: {
    requestBody: Paths.ThemNguoiDung.RequestBody;
    params: UnknownParams;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<Paths.ThemNguoiDung.RequestBody, UnknownParams, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.ThemNguoiDung.Responses.$201 | Paths.ThemNguoiDung.Responses.$401 | Paths.ThemNguoiDung.Responses.$403;
  }
  /**
   * POST /cau-hoi
   */
  ['themCauHoi']: {
    requestBody: Paths.ThemCauHoi.RequestBody;
    params: UnknownParams;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<Paths.ThemCauHoi.RequestBody, UnknownParams, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.ThemCauHoi.Responses.$201 | Paths.ThemCauHoi.Responses.$401 | Paths.ThemCauHoi.Responses.$403;
  }
  /**
   * GET /lich-su-lam-bai
   */
  ['lietKeLichSuLamBai']: {
    requestBody: any;
    params: UnknownParams;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<any, UnknownParams, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.LietKeLichSuLamBai.Responses.$200 | Paths.LietKeLichSuLamBai.Responses.$401 | Paths.LietKeLichSuLamBai.Responses.$403;
  }
  /**
   * POST /lich-su-lam-bai
   */
  ['taoLichSuLamBai']: {
    requestBody: any;
    params: UnknownParams;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<any, UnknownParams, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.TaoLichSuLamBai.Responses.$201 | Paths.TaoLichSuLamBai.Responses.$401 | Paths.TaoLichSuLamBai.Responses.$403;
  }
  /**
   * PUT /cau-hoi/{questionId}
   */
  ['capNhatCauHoi']: {
    requestBody: Paths.CapNhatCauHoi.RequestBody;
    params: Paths.CapNhatCauHoi.PathParameters;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<Paths.CapNhatCauHoi.RequestBody, Paths.CapNhatCauHoi.PathParameters, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.CapNhatCauHoi.Responses.$200 | Paths.CapNhatCauHoi.Responses.$401 | Paths.CapNhatCauHoi.Responses.$403;
  }
  /**
   * DELETE /cau-hoi/{questionId}
   */
  ['xoaCauHoi']: {
    requestBody: any;
    params: Paths.XoaCauHoi.PathParameters;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<any, Paths.XoaCauHoi.PathParameters, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.XoaCauHoi.Responses.$204 | Paths.XoaCauHoi.Responses.$401 | Paths.XoaCauHoi.Responses.$403;
  }
}

export type OperationContext<operationId extends keyof Operations> = Operations[operationId]["context"];
export type OperationResponse<operationId extends keyof Operations> = Operations[operationId]["response"];
export type HandlerResponse<ResponseBody, ResponseModel = Record<string, any>> = ResponseModel & { _t?: ResponseBody };
export type OperationHandlerResponse<operationId extends keyof Operations> = HandlerResponse<OperationResponse<operationId>>;
export type OperationHandler<operationId extends keyof Operations, HandlerArgs extends unknown[] = unknown[]> = (...params: [OperationContext<operationId>, ...HandlerArgs]) => Promise<OperationHandlerResponse<operationId>>;


export type Question = Components.Schemas.Question;
export type QuestionCreate = Components.Schemas.QuestionCreate;
export type QuestionUpdate = Components.Schemas.QuestionUpdate;
export type Subject = Components.Schemas.Subject;
export type TestAttempt = Components.Schemas.TestAttempt;
export type TestAttemptSummary = Components.Schemas.TestAttemptSummary;
export type User = Components.Schemas.User;
export type UserCreate = Components.Schemas.UserCreate;
