import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaRegister } from "../schemas/auth";
import { registerUser } from "../axios/auth";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaRegister),
  });

  const handleRegister = async (dataBody) => {
    try {
      const data = await registerUser("/register", dataBody);
      if (data.user && confirm("Login now?")) {
        nav("/login");
      } else {
        reset();
      }
    } catch (error) {
      alert("Đã xảy ra lỗi khi đăng ký.");
    }
  };

  return (
    <div>
      <h2>Đăng Ký</h2>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="form-group">
          <label>Tên người dùng</label>
          <input
            type="text"
            className="form-control"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-danger">{errors.username.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" {...register("email")} />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Xác nhận mật khẩu</label>
          <input
            type="password"
            className="form-control"
            {...register("confirmPass")}
          />
          {errors.confirmPass && (
            <p className="text-danger">{errors.confirmPass.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Đăng ký
        </button>
      </form>

      <div className="mt-3">
        <p>
          Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
