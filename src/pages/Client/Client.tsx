import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import useAdress from "../../hooks/useAdress";
import useClient from "../../hooks/useClient";
import useService from "../../hooks/useService";

const Client = () => {
  const { id } = useParams();
  const { data: ClientData } = useClient(id || "");
  const { data: ClientAdress } = useAdress(id || "");
  const { data: ClientServices } = useService(id || "");

  return (
    <>
      <Header />
      <div style={{ padding: "90px 150px" }}>
        <h1>
          {ClientData?.data.nome} {ClientData?.data.sobrenome}
        </h1>
        <h1>{ClientData?.data.cpf}</h1>
        <h1>{ClientData?.data.created_at}</h1>
        <h1>{ClientData?.data.updated_at}</h1>

        <h1>{ClientAdress?.data.rua}</h1>
        <h1>{ClientAdress?.data.estado}</h1>
        <h1>{ClientAdress?.data.cidade}</h1>
        <h1>{ClientAdress?.data.cep}</h1>
        <h1>{ClientAdress?.data.numero}</h1>
        <h1>{ClientAdress?.data.complemento}</h1>
        <h1>{ClientAdress?.data.created_at}</h1>
        <h1>{ClientAdress?.data.updated_at}</h1>
        
        
        <h1>{ClientServices?.data.descricao}</h1>
        <h1>{ClientServices?.data.created_at}</h1>
        <h1>{ClientServices?.data.data}</h1>
        <h1>{ClientServices?.data.data_retorno}</h1>

      </div>
    </>
  );
};

export default Client;
