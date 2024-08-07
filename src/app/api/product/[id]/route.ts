import { NextRequest, NextResponse } from 'next/server'
import connectMongo from '@/utils/connect-mongo'
import Product from '@/models/product'
import { HttpStatusCode } from 'axios'
import { UpdateProductDto } from '@/dto/update-product.dto'

export async function GET(
    _: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectMongo()
        const product = await Product.findById(params.id)
        if (product) {
            return NextResponse.json({ product })
        }
        return NextResponse.json(
            { message: `Product ${params.id} not found` },
            { status: HttpStatusCode.NotFound }
        )
    } catch (error) {
        return NextResponse.json(
            { message: error },
            { status: HttpStatusCode.BadRequest }
        )
    }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectMongo()
        const product = await Product.findById(params.id)
        if (product) {
            const body: UpdateProductDto = await req.json()
            if (body.name) {
                product.name = body.name
            }
            if (body.price) {
                product.price = body.price
            }
            if (body.description) {
                product.description = body.description
            }
            product.save()
            return NextResponse.json({ product })
        }
        return NextResponse.json(
            { message: `Product ${params.id} not found` },
            { status: HttpStatusCode.NotFound }
        )
    } catch (error) {
        return NextResponse.json(
            { message: error },
            { status: HttpStatusCode.BadRequest }
        )
    }
}

export async function DELETE(
    _: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectMongo()
        const product = await Product.findById(params.id)
        if (product) {
            await Product.findByIdAndDelete(product._id)
            return NextResponse.json({
                message: `Product ${params.id} has been deleted`,
            })
        }
        return NextResponse.json(
            { message: `Product ${params.id} not found` },
            { status: HttpStatusCode.NotFound }
        )
    } catch (error) {
        return NextResponse.json(
            { message: error },
            { status: HttpStatusCode.BadRequest }
        )
    }
}
