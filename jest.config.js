module.exports = {
    testPathIgnorePatterns: ["/node_modules", "/dist"],
    setupFilesAfterEnv: [
        "<rootDir>/tests/setupTests.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.ts",
        "\\.(scss|css|sass)$": "identity-obj-proxy"
    }
}
