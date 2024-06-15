'use server'

export default async function contactAction(formData: FormData) {

    const db = process.env.NEXT_PUBLIC_TEST_DB;
    const server = process.env.NEXT_PUBLIC_SERVER;
    
    const body = {
        apiKey: process.env.NEXT_PUBLIC_DB_KEY,
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        withImg: true,
    }

    try {
        await fetch(db ? `${server}/sendMail?testDb=${db}` : `${server}/sendMail`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            }
        )
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send...")
    }
}