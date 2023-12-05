import createApiInstance from "../axios-config";
const Api = createApiInstance();
export interface ImagemPerfilUsuarioVM {
  id: number;
  url: string;
  name: string;
  type: string;
  contentType: string;
  idUsuario: number;
}

const getImagemPerfilUsuarioByIdUsuario = async (): Promise<ImagemPerfilUsuarioVM | any> => {
  try {
    const url = '/ImagemPerfilUsuario';
    const accessToken = localStorage.getItem('@dpApiAccess')?.replaceAll('"', '');
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    };
    const { data } = await Api.get(url, { headers });
    if (data.message === true) {
      return data.imagemPerfilUsuario;
    } else {
      return null;
    }
  }
  catch {
    return null;
  }
};

const createImagemPerfilUsuario = async (file: File): Promise<any> => {
  try {
    const url = '/ImagemPerfilUsuario';
    const accessToken = localStorage.getItem('@dpApiAccess')?.replaceAll('"', '');
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    };


    const formData = new FormData();
    formData.append('file', file);
    const { data } = await Api.post(url, formData, { headers });

    if (data) {
      return data;
    }
  }
  catch (error) {
    return { message: 'Erro ao incluir imagem de perfil do usuário!' };
  }
};

const updateImagemPerfilUsuario = async (file: File): Promise<any> => {
  try {
    const url = '/ImagemPerfilUsuario';
    const accessToken = localStorage.getItem('@dpApiAccess')?.replaceAll('"', '');
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    };


    const formData = new FormData();
    formData.append('file', file);
    const { data } = await Api.put(url, formData, { headers });

    if (data) {
      return data;
    } else {
      throw new Error();
    }
  }
  catch {
    return { message: 'Erro ao alterar imagem de perfil do usuário!' };
  }
};

const deleteImagemPerfilUsuario = async (): Promise<any> => {
  try {
    const url = '/ImagemPerfilUsuario';
    const accessToken = localStorage.getItem('@dpApiAccess')?.replaceAll('"', '');
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    };


    const idUsuario = Number(localStorage.getItem('idUsuario'));
    const { data } = await Api.delete(`${url}/ ${idUsuario}`, { headers });

    if (data) {
      return data;
    } else {
      throw new Error();
    }
  }
  catch (error) {
    return { message: 'Erro ao deletar imagem de perfil do usuário!' };
  }
};

export const ImagemPerfilUsuarioService = {
  getImagemPerfilUsuarioByIdUsuario,
  createImagemPerfilUsuario,
  updateImagemPerfilUsuario,
  deleteImagemPerfilUsuario
};