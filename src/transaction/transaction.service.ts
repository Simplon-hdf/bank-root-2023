import { Injectable } from "@nestjs/common";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaClient, Transaction, Account } from "@prisma/client";

const prisma = new PrismaClient();

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async createTransaction(
    createTransactionDto: CreateTransactionDto
  ): Promise<Transaction> {
    const { account_id, amount, type } = createTransactionDto;

    const account = await prisma.account.findUnique({
      where: { id_account: account_id },
    });

    if (!account) {
      throw new Error(`No account found with id ${account_id}`);
    }

    if (type === "debit" && amount > account.balance) {
      throw new Error("Insufficient funds");
    }

    const transaction = await prisma.transaction.create({
      data: {
        account: { connect: { id_account: account_id } },
        amount,
        type,
      },
    });

    if (type === "debit") {
      await prisma.account.update({
        where: { id_account: account_id },
        data: { balance: account.balance - amount },
      });
    } else if (type === "credit") {
      await prisma.account.update({
        where: { id_account: account_id },
        data: { balance: account.balance + amount },
      });
    }

    return transaction;
  }

  async getTransactionsForAccount(accountId: number) {
    const transactions = await prisma.transaction.findMany({
      where: { account_id: accountId },
      orderBy: { created_at: "desc" },
    });

    return transactions;
  }

  // ----------------------------------------------------------------
  findAll() {
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
