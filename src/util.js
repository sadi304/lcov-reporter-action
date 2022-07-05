export function normalisePath(file) {
	return file.replace(/\\/g, "/")
}

export function joinPath(paths) {
	return paths.map(path => normalisePath(path)).join('/')
}
