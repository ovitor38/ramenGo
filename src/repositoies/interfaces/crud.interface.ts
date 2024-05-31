export interface ICrudRepository<T, CreateDto, UpdateDto> {
  create(createDto: CreateDto): Promise<void>
  get(id: string | number): Promise<T>
  getAll(): Promise<T[]>
  update(id: string | number, updateDto: UpdateDto): Promise<void>
  delete(id: string | number): Promise<void>
}
