import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const job = await request.json()
        const db = await connectToDatabase()

        const { ...updateData } = job // Removed unused _id destructuring

        const result = await db.collection('jobs').updateOne(
            { _id: new ObjectId(params.id) },
            { $set: updateData }
        )

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { error: 'Job not found' },
                { status: 404 }
            )
        }

        return NextResponse.json({ success: true, message: 'Job updated successfully' })
    } catch (err) { // Changed to err to avoid unused error variable
        console.error('Server error:', err)
        return NextResponse.json(
            { error: 'Failed to update job' },
            { status: 500 }
        )
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const db = await connectToDatabase()
        await db.collection('jobs').deleteOne({ _id: new ObjectId(params.id) })
        return NextResponse.json({ success: true })
    } catch (err) { // Log or use err
        console.error('Error deleting job:', err) // Log the error
        return NextResponse.json({ err: 'Failed to delete job' }, { status: 500 })
    }
}