export default defineEventHandler(async (event) => {
    return {
        statusCode: 200,
        body: {
            message: 'check /api/test route',
        },
    };
})
