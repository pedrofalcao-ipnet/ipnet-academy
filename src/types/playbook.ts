/**
 * Tipo central para itens do repositório de conhecimento.
 * Utilizado em todas as rotas que fazem busca no Firestore.
 *
 * Coleção Firestore sugerida: `playbook_items`
 * Campos obrigatórios: id, title, description, category
 * Campo opcional: url (link para documentação externa ou playbook interno)
 */
export interface PlaybookItem {
  /** ID do documento no Firestore (usado como chave React) */
  id: string;

  /** Título exibido no card ou na listagem */
  title: string;

  /** Descrição curta do conteúdo do item */
  description: string;

  /**
   * Categoria que agrupa o item dentro de uma rota.
   * Exemplos: "infra", "data", "ai" (GCP) | "core", "database" (OCI)
   *           "processes" | "services" | "academy"
   */
  category: string;

  /** URL para documentação externa, playbook ou material de treinamento */
  url?: string;
}
