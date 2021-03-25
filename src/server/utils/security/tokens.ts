import  * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

import config from '../../config';
import db from '../../db';

export const CreateToken = async (payload: IPayload) => {
    let tokenid: any = await db.tokens.insertToken(payload.authorid);
    payload.tokensid = tokenid.insertId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token: any = await jwt.sign(payload.tokenid, config.auth.secret);
    await db.tokens.updateToken(payload.tokensid, token)
    return token;
};

export const ValidateToken = async (token: any) => {
    let payload: IPayload = <IPayload>jwt.decode(token);
    let [tokenid] = await db.tokens.findOneByToken(payload.tokenid, token);
    if(!tokenid) {
        throw new Error('Invalid Token!');
    } else {
        return payload;
    }
}

export interface IPayload {
    [key: string]: any,
    authorid: number,
    unique?: string,
}