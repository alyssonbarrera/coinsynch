import admin from 'firebase-admin'

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
}

export { admin }
