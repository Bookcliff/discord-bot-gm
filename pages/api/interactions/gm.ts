import { WebhookClient } from "discord.js";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const webhookClient = new WebhookClient({ id: `${process.env.WEBHOOK_ID}`, token: `${process.env.WEBHOOK_TOKEN}` });

    webhookClient.send({
        content: 'GM!',
        username: 'GM Bot',
        avatarURL: 'https://i.imgur.com/AfFp7pu.png',
    });

    res.status(200).json({ message: 'Hello!' })
}

