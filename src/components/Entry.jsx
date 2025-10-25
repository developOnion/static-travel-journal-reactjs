export default function Entry({ entry }) {
	const { img, title, googleMapsLink, country, text, dates } = entry;

	return (
		<article className="flex items-center">
			<div className="shrink-0">
				<img
					src={img.src}
					alt={img.alt}
					className="object-cover w-[150px] h-[200px] rounded-md"
				/>
			</div>
			<div className="px-5 flex flex-col justify-center">
				<div className="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						className="text-red-600"
					>
						<rect width="24" height="24" fill="none" />
						<g fill="none" stroke="currentColor" stroke-width="1.5">
							<path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" />
							<circle cx="12" cy="10" r="3" />
						</g>
					</svg>
					<span className="ml-1 mr-4 font-light">{country}</span>
					<a
						target="_blank"
						href={googleMapsLink}
						className="underline font-light text-gray-500 text-sm"
					>
						View on Google Maps
					</a>
				</div>
				<h2 className="font-bold text-3xl mb-4">{title}</h2>
				<p className="font-semibold text-sm mb-2">{dates}</p>
				<p className="font-light text-sm">{text}</p>
			</div>
		</article>
	);
}
