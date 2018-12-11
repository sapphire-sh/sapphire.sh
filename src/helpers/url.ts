import path from 'path';

export function getBaseURL() {
	return __travis ? '' : path.resolve(__dist_path, '..');
}
