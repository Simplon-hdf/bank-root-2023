-- CreateTable
CREATE TABLE "Client" (
    "id_client" SERIAL NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "email_address" VARCHAR(50) NOT NULL,
    "password" VARCHAR(250) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id_client")
);

-- CreateTable
CREATE TABLE "Account" (
    "id_account" SERIAL NOT NULL,
    "id_client" INTEGER NOT NULL,
    "admin_id" INTEGER NOT NULL,
    "account_number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id_account")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id_transaction" SERIAL NOT NULL,
    "account_id" INTEGER NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id_transaction")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" SERIAL NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "email_address" VARCHAR(50) NOT NULL,
    "password" VARCHAR(250) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin")
);

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id_account") ON DELETE RESTRICT ON UPDATE CASCADE;
