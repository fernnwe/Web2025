// Menu hamburguesa
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact form (Supabase)
import { supabase } from "./supabaseClient.js";

document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    const { error } = await supabase
        .from("contacto")
        .insert({ nombre: name, correo: email, mensaje: message });

    if (!error) {
        alert("Mensaje enviado!");
        e.target.reset();
    } else {
        alert("Error al enviar.");
    }
});
