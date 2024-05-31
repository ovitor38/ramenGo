-- AlterTable
CREATE SEQUENCE broth_id_seq;
ALTER TABLE "Broth" ALTER COLUMN "id" SET DEFAULT nextval('broth_id_seq');
ALTER SEQUENCE broth_id_seq OWNED BY "Broth"."id";

-- AlterTable
CREATE SEQUENCE protein_id_seq;
ALTER TABLE "Protein" ALTER COLUMN "id" SET DEFAULT nextval('protein_id_seq');
ALTER SEQUENCE protein_id_seq OWNED BY "Protein"."id";
