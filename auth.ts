import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials'

interface User {
    name: string | undefined;
    image: string | undefined;
}

export const {handlers, auth, signIn, signOut} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, request) {
                console.log('Credentials provided: ', credentials);
                if(credentials.password === 'test'){
                    return {
                        'email': 'ashik@gmail.com',
                        'id': '1',
                        'image': '',
                        'name': 'Ashik'
                    }
                }
                return null;
            },
        })
    ],
    pages: {
        signIn: '/auth/login'
    }
})