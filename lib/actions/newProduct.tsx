'use server'

import { db } from '@/lib/prisma';

interface ProductData {
    name: string;
    description: string;
    price: number;
    quantity: number;
    status: string;
}

export async function CreateProduct(eventData: ProductData) {
    try {
        const { name, description, price, quantity, status } = eventData;
        const newProduct = await db.product.create({
            data: { name, description, price, quantity, status }
        });
        return newProduct;
    } catch (error) {
        console.error("Failed to create product:", error);
        throw new Error("Failed to create product");
    }
}
