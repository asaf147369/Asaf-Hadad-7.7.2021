export interface Location {
	Key: string;
	LocalizedName: string;
	Version?: number;
	AdministrativeArea?: {
		ID: string;
		LocalizedName: string;
	};
	Country?: {
		ID: string;
		LocalizedName: string;
	}
	Rank?: number;
	Type?: string;
}
