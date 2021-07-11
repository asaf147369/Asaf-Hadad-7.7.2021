export function change_degree(type:string, degree: string):string {
	if (type === "celsius") {
		return  String((5 / 9) * (+degree - 32));
	}
	if (type === "fahrenheit") {
		return String(+degree * 9 / 5 + 32);
	}
	return String(0);
}