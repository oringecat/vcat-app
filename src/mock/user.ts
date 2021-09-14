const login = {
    url: "/user/login",
    type: "post",
    response: {
        code: 100,
        message: "success",
        total: 0,
        data: {
            id: 1001,
            account: "teamwei",
            avatar: "",
            realName: "李兔饼",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        }
    }
}

export default [
    login,
]