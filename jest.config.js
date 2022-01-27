module.exports = {
	roots: ["<rootDir>/src", "<rootDir>/tests"],
	testPathIgnorePatterns: ["/node_modules", "/dist"],
	setupFilesAfterEnv: [
		"<rootDir>/tests/config/setupTests.ts"
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
		"@/tests/(.*)": "<rootDir>/tests/$1",
		"\\.css$": "identity-obj-proxy",
		"\\.(svg|png|jpg|jpeg)": "<rootDir>/__mocks__/fileMock.ts",
	}
};
