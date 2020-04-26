
export class ResponseDataUtils {
    constructor() {}

    public static successResponse(data: any, code: number, message: any) {
        return {
            data: data,
            status: {
                code: code,
                success: true,
                message: message
            }
        }
    }

    public static faildResponse(code: number, message: any) {
        return {
            status: {
                code: code,
                success: false,
                message: message
            }
        }
    }
}
