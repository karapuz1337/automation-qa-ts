// TASK 1
// 1
const baseUrl: string = "https://example.com"
// 2
const timeout: number = 3000
// 3
const isHeadless: boolean = true
// 4
const browsers: string[] = ["chromium", "firefox", "webkit"]

// TASK 2

const buildTestUrl = (baseUrl: string, path: string) : string => {
    return `${baseUrl}${path}`
}

// TASK 3

const testConfig : {
    baseUrl: string,
    timeout: number,
    retries: number,
    headless: boolean
} = {
    baseUrl,
    timeout,
    retries: 2,
    headless: isHeadless
}

// TASK 4

function getTestSummary(result: { testName: string; passed: boolean; duration: number }) : string {
    return `Test '${result.testName}' ${result.passed ? 'passed' : 'failed'} in ${result.duration} ms`
}

// TASK 5

function parseTestCount(input: unknown): number {
    if (typeof input === "number") return input;
    if (typeof input === "string" && !isNaN(Number(input))) return Number(input);
    return 0;
}