// Este archivo inicializa el cliente de Supabase usando ESM y la librería oficial.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js'


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


// Funciones reutilizables (ejemplo: insertar contacto)
export async function saveContact({ name, email, message }){
const { data, error } = await supabase
.from('contacts')
.insert([{ name, email, message }])
return { data, error }
}


export async function fetchProjects(){
// ejemplo simple: debe existir una tabla 'projects' con campos mínimos
const { data, error } = await supabase
.from('projects')
.select('id,title,summary,cover_url')
.order('id', { ascending: false })
return { data, error }
}