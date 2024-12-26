import axios from "axios";
import  { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "../assets/register.css";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();



  const register = async (e) => {
    e.preventDefault(); 
    try {
   
      await axios.post(
        "http://localhost:2026/api/user/register", 
        {
          email: email,
          password: password,
          username: username,
        }
      );
      // Sweet alert untuk peringatan dimana kita bisa melihat const yang kita jalankan berhasil atau gagal
      Swal.fire({
        icon: "success",
        title: "Berhasil Register!!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        history("/barang"); 
      }, 1500);
    } catch (error) {
      // bagian ini akan menampilkan error dalam console
      console.log(error);
    }
  };
  return (
    <body className="body1 md:text-base lg:h-100vh sm:text-sm">
      <div className="container1">
        <h3>Registrasi</h3>
        <form onSubmit={register} method="POST">
         
          <label>Username</label>
          <br />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            type="text"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
          <br />
          <button type="submit">Register</button> {/* Tombol untuk mengirim data form.*/}
          <p>
            {" "}
            Belum punya akun?
            <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </body>
  );
}

export default Register;
