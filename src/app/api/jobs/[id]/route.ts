import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PUT(
    request: NextRequest,
    context: { params: Promise<{ id: string }> } // Update type to reflect Promise
) {
    try {
        const { id } = await context.params; // Await params

        if (!id) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        const db = await connectToDatabase();
        const jobData = await request.json();
        const updateData = Object.fromEntries(
            Object.entries(jobData).filter(([key]) => key !== '_id')
        );

        const result = await db.collection('jobs').updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );

        if (!result.matchedCount) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Failed to update job' }, { status: 500 });
    }
}
export async function DELETE(
    request: NextRequest,
    context: { params: Promise<{ id: string }> } // Update type to reflect Promise
) {
    try {
        const { id } = await context.params; // Await params

        if (!id) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        const db = await connectToDatabase();

        const result = await db.collection('jobs').deleteOne({ _id: new ObjectId(id) });

        if (!result.deletedCount) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting job:', error);
        return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
    }
}

