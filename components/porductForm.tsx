'use client'
import { CreateProduct } from "@/lib/actions/newProduct";
import React, { useState } from "react";

export default function ProductForm() {
    // States
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [status, setStatus] = useState('');
    const [submit, setSubmit] = useState(false);

    // Handle change functions
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };

    const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(event.target.value));
    };

    const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    };

    // Handle submit
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            setSubmit(true);
            await CreateProduct({ name, description, price, quantity, status });
            setName('');
            setDescription('');
            setPrice(0);
            setQuantity(0);
            setStatus('');
            alert("Success");
        } catch (error) {
            alert("Failed");
        } finally {
            setSubmit(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
                <div>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="Name"
                        className="bg-black text-white p-2"
                        value={name}
                        onChange={handleChangeName}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Description"
                        className="bg-black text-white p-2"
                        value={description}
                        onChange={handleChangeDescription}
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Price"
                        className="bg-black text-white p-2"
                        value={price}
                        onChange={handleChangePrice}
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Quantity"
                        className="bg-black text-white p-2"
                        value={quantity}
                        onChange={handleChangeQuantity}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Status"
                        className="bg-black text-white p-2"
                        value={status}
                        onChange={handleChangeStatus}
                        required
                    />
                </div>
                <div className="flex flex-col items-center">
                    <button
                        type="submit"
                        className="bg-black p-2 text-white rounded-lg w-28 hover:font-bold"
                        disabled={submit}
                    >
                        {submit ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </div>
        </form>
    );
}
