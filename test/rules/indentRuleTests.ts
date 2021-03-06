/*
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

/// <reference path='../references.ts' />

describe("<indent>", () => {
    var IndentRule = Lint.Test.getRule("indent");
    var failureString = IndentRule.FAILURE_STRING + "expected 4, got ";
    var failureString8 = IndentRule.FAILURE_STRING + "expected 8, got ";

    describe("on a tab-indented file", () => {
        var fileName = "rules/indent_tabs.test.ts";
        var actualFailures;

        before(() => {
            actualFailures = Lint.Test.applyRuleOnFile(fileName, IndentRule, [true, 4]);
        });

        it("enforces module indentation", () => {
            var expectedFailure = Lint.Test.createFailure(fileName, [58, 4], [58, 27], failureString + "6");
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure);
        });

        it("enforces class variable indentation", () => {
            var expectedFailure = Lint.Test.createFailure(fileName, [66, 3], [66, 10], failureString + "2");
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure);
        });

        it("enforces class method indentation", () => {
            var expectedFailure = Lint.Test.createFailure(fileName, [68, 3], [68, 15], failureString + "2");
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure);
        });

        it("enforces enum indentation", () => {
            var expectedFailure1 = Lint.Test.createFailure(fileName, [80, 4], [80, 10], failureString + "6");
            var expectedFailure2 = Lint.Test.createFailure(fileName, [81, 3], [81, 9], failureString + "5");

            Lint.Test.assertContainsFailure(actualFailures, expectedFailure1);
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure2);
        });

        it("enforces switch indentation", () => {
            var expectedFailure1 = Lint.Test.createFailure(fileName, [85, 3], [85, 7], failureString + "5");
            var expectedFailure2 = Lint.Test.createFailure(fileName, [86, 4], [86, 22], failureString8 + "6");
            var expectedFailure3 = Lint.Test.createFailure(fileName, [88, 3], [88, 10], failureString + "2");
            var expectedFailure4 = Lint.Test.createFailure(fileName, [89, 4], [89, 28], failureString8 + "6");

            Lint.Test.assertContainsFailure(actualFailures, expectedFailure1);
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure2);
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure3);
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure4);
        });
    });

    describe("on a space-indented file", () => {
        var fileName = "rules/indent_spaces.test.ts";
        var actualFailures;

        before(() => {
            actualFailures = Lint.Test.applyRuleOnFile(fileName, IndentRule, [true, 4]);
        });

        it("enforces module indentation", () => {
            var expectedFailure = Lint.Test.createFailure(fileName, [58, 7], [58, 30], failureString + "6");
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure);
        });

        it("enforces class variable indentation", () => {
            var expectedFailure = Lint.Test.createFailure(fileName, [66, 3], [66, 10], failureString + "2");
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure);
        });

        it("enforces class method indentation", () => {
            var expectedFailure = Lint.Test.createFailure(fileName, [68, 3], [68, 15], failureString + "2");
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure);
        });

        it("enforces enum indentation", () => {
            var expectedFailure1 = Lint.Test.createFailure(fileName, [80, 7], [80, 13], failureString + "6");
            var expectedFailure2 = Lint.Test.createFailure(fileName, [81, 6], [81, 12], failureString + "5");

            Lint.Test.assertContainsFailure(actualFailures, expectedFailure1);
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure2);
        });

        it("enforces switch indentation", () => {
            var expectedFailure1 = Lint.Test.createFailure(fileName, [85, 6], [85, 10], failureString + "5");
            var expectedFailure2 = Lint.Test.createFailure(fileName, [86, 7], [86, 25], failureString8 + "6");
            var expectedFailure3 = Lint.Test.createFailure(fileName, [88, 3], [88, 10], failureString + "2");
            var expectedFailure4 = Lint.Test.createFailure(fileName, [89, 7], [89, 31], failureString8 + "6");

            Lint.Test.assertContainsFailure(actualFailures, expectedFailure1);
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure2);
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure3);
            Lint.Test.assertContainsFailure(actualFailures, expectedFailure4);
        });
    });
});
