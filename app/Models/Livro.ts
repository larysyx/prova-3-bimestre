import { DateTime } from 'luxon'
import { 
  BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, ManyToMany, manyToMany
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public titulo: string

  @column({ autoCreate: true })
  public autor: string

  @column({ autoCreate: true, autoUpdate: true })
  public resenha: string
}
