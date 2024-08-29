export type CRITICS = {
	author: string
	media: string
	quote: string
}

export type Dancer = {
	name: string
	short_name: string
	position: string[]
	bio: string
	dancer_trigger: string
	profile_image: string
	thumbnail_image: string
}

export interface PRODUCCIONES {
	id: string
	title: string
	create_date: number
	description: string[]
	critic: string
	trailer?: string
	trailer_image?: string
	cite: string
	coreograph: string
	music: string
	ligth_design: string
	costume_design: string
	dance_material: string[]
	iterpretation: string[]
	reference_name: string
	swiper_images: { id: number; src: string }[]
	rehersal_images?: { id: number; src: string }[]
}
