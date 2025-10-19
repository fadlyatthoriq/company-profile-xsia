'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GallerySection() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                        alt="Gallery image"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                        alt="Gallery image 1"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                        alt="Gallery image 2"
                    />
                </div>
            </div>

            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                        alt="Gallery image 3"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                        alt="Gallery image 4"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                        alt="Gallery image 5"
                    />
                </div>
            </div>

            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                        alt="Gallery image 6"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                        alt="Gallery image 7"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                        alt="Gallery image 8"
                    />
                </div>
            </div>

            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                        alt="Gallery image 9"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                        alt="Gallery image 10"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                        alt="Gallery image 11"
                    />
                </div>
            </div>
        </div>
    );
}
