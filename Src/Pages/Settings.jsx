import React from "react";

export default function Settings() {
  return (
    <section style={{ backgroundColor: "#000", color: "#FFD700", minHeight: "100vh", padding: "2rem" }}>
      <h2>Políticas y Términos</h2>
      <ul>
        <li>Mayor de 18 años para participar.</li>
        <li>Compra de boletos no reembolsable.</li>
        <li>Sorteo sujeto a disponibilidad de boletos.</li>
        <li>Resultado final es inapelable.</li>
      </ul>
      <h3>Formas de pago:</h3>
      <ul>
        <li>Tarjeta de crédito/débito</li>
        <li>PayPal</li>
        <li>Transferencia bancaria</li>
        <li>OXXO</li>
      </ul>
      <p>© 2025 SorteosGordos. Todos los derechos reservados.</p>
    </section>
  );
}
