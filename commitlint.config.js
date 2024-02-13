module.exports = {
	extends: [
		'@commitlint/config-conventional'
	],
	rules: {
        "subject-max-length": [2, "always", 49],
        "subject-case": [2, "always", ["sentence-case"]]
    }
}
