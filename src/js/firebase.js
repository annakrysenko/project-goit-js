// import main firebase
import { initializeApp } from 'firebase/app';
// library
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
// signup
import {
  getAuth,
  createUserWithEmailAndPassword,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signOut,
} from 'firebase/auth';
// for database
import { getDatabase, ref, set, child, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCEvjWSGXAodZ-uOPqRUlwY7-bkZBuLMJM',
  authDomain: 'film-library-8db5a.firebaseapp.com',
  projectId: 'film-library-8db5a',
  storageBucket: 'film-library-8db5a.appspot.com',
  messagingSenderId: '854707559729',
  appId: '1:854707559729:web:8a7e1d6f0fbec39a222410',
};

// init firebase app

const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth(app);

// collection ref
const colRef = collection(db, 'library');

// console.log(colRef);

// getDocs(colRef)
//   .then((snapshot) => {
//     let library = [];
//     snapshot.docs.forEach((doc) => library.push({ ...doc.data(), id: doc.id }))
//     console.log(library);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

// adding subject
// const addUserForm = document.querySelector('.add');
// addUserForm.addEventListener('submit', (event) => {
//   event.preventDefault()

//   addDoc(colRef, {
//     title: addUserForm.title.value,
//     author: addUserForm.author.value
//   })
//     .then(() => {
//     addUserForm.reset
//   })
// })

//delete subject
// const deleteUserForm = document.querySelector('.delete')
// deleteUserForm.addEventListener('submit', (event) => {
//   event.preventDefault()

//   const docRef = doc(db, 'library', deleteUserForm.id.value)

//   deleteDoc(docRef)
//     .then(() => {
//     deleteUserForm.reset()
//   })
// })

//signing users up
const regex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const signupForm = document.querySelector('.signup');

// if (signupForm.addEventListener) {
//   signupForm.addEventListener('submit', (event) => {
//   event.preventDefault()

//   const email = signupForm.email.value;
//   const password = signupForm.password.value;

//   console.log(regex.test(email));

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((cred) => {

//       const user = cred.user;
//       console.log('user created:', cred.user);
//       signupForm.reset();

//        return console.log('wrong email')
//     })
//     .catch((err) => {
//       alert(err.message);
//   })
// }), false

// }

signupForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  console.log(regex.test(email));

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      const user = cred.user;
      console.log('user created:', cred.user);
      signupForm.reset();

      return console.log('wrong email');
    })
    .catch(err => {
      alert(err.message);
    });
});

// if (  email.includes('@') && email.includes('.'))

// logging in and out

// const hiddenLogut = document.querySelector('.hidden-logut');

// hiddenLogut.addEventListener('click', () => {

// hiddenLogut.style.display = 'none';
// }

const logoutButton = document.querySelector('.logout');

logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('the user signed out');
    })
    .catch(err => {
      console.log(err.message);
    });
});

const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user loggen in:', cred.user);
    })
    .catch(err => {
      console.log(err.message);
    });
});

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     console.log('u are inside')
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

//changed .modal-registration

const modal = document.querySelector('.modal-registration');
const authScript = document.querySelector("div[data-section='auth']");
const logout = document.querySelector("div[data-section='logout']");

const loginBtn = document.querySelector('.loginBtn');
const registrationBtn = document.querySelector('.registrationBtn');

const form1 = document.querySelector('.login-modal');
const form2 = document.querySelector('.signup-modal');

modal.style.display = 'none';

const removeEventModal = e => {
  modal.removeEventListener('click', callback);
};

const openModal = e => {
  modal.classList.remove('hidden');
  console.log(modal);
  console.log(e);
  modal.style.display = '';
  form1.classList.remove('hidden');
  form2.classList.add('hidden');
  loginBtn.classList.add('hidden');
  registrationBtn.classList.remove('hidden');
  bntModal.classList.add('hidden');
};

const closeModal = e => {
  modal.classList.add('hidden');
  console.log(modal);
  console.log(e);
  //  modal.style.display = '';
  bntModal.classList.remove('hidden');
};

const callback = event => {
  if (event.target.dataset.block === 'login') {
    //form1.classList.remove ='hidden'
    console.dir(event.currentTarget.elements);
    // console.log(event.currentTarget.elements[0].elements[1]);
    // console.log(event.currentTarget.elements[0].elements[2]);

    // const form1 = event.currentTarget.elements[0].elements[1];
    // const form2 = event.currentTarget.elements[0].elements[2];
    console.log(form1);
    form1.classList.remove('hidden');
    form2.classList.add('hidden');
    loginBtn.classList.add('hidden');
    registrationBtn.classList.remove('hidden');
  }

  if (event.target.dataset.block === 'signup') {
    // const form1 = event.currentTarget.elements[0].elements[1]
    //  const form2 = event.currentTarget.elements[0].elements[2]
    form1.classList.add('hidden');
    form2.classList.remove('hidden');
    loginBtn.classList.remove('hidden');
    registrationBtn.classList.add('hidden');
  }
  if (event.target.dataset.action === 'signup') {
    signUpFirebase().then(() => console.log('your logic removeEventModal()'));
  }
};

onAuthStateChanged(auth, user => {
  if (user) {
    // authScript.classList.add('hidden');
    logout.classList.remove('hidden');
    const uid = user.uid;
    console.log('u are inside');
    // ...
  } else {
    console.log('u r not in');
    authScript.classList.remove('hidden');
    logout.classList.add('hidden');
  }
});

const bntModal = document.querySelector('.open-modal-bth');
bntModal.addEventListener('click', openModal);

const closeModalForm = document.querySelector('.close-modal-bth');
closeModalForm.addEventListener('click', closeModal);

modal.addEventListener('click', callback);

//     onAuthStateChanged(auth, (user) => {

// const buttonElem = document.querySelector('sec')
// const modalElem = document.querySelector('modal')

// modalElem.style.cssText = `
//   display: flex;
//   visibility: hidden;
//   opacity: 0;
// `;

// const closeModal = event => {
//   const target = event.target;

//   if (target === modalElem) {
//     modalElem.style.visibility = 'hidden';
//     modalElem.style.opacity = 0;
//   }
// }

// const openModal = () => {
//   modalElem.style.visibility = 'visible';
//   modalElem.style.opacity = 1
// }

// buttonElem.addEventListener('click', openModal);
// modalElem.addEventListener('click', closeModal)

//   if (user.uid) {
//     authScript.classList.add('hidden'); logout.classList.remove('hidden')
//   }

//   else{
//         authScript.classList.remove('hidden'); logout.classList.add('hidden')
//       }
//     })

// _____________________________________________________________________________________________--
// connectAuthEmulator(auth, "http://localhost:1234");

// const loginEmailPassword = async () => {
//   const loginEmail = txtEmail.value;
//   const loginPassword = txtPassword.value;

//   const userCredentail = await signInWithEmailAndPassword (auth, loginEmail, loginPassword)
// }

export {
  authWithEmailAndPassword,
  RegistrationWithEmailAndPassword,
  logOutAuthUser,
  authState,
};

// api => 2241016891d36a71e0a92d4df84beadb

// Collection id => library

//Document ID =>  QOxafgZ7VZItKprZei8Q

// import './js/firebase'
