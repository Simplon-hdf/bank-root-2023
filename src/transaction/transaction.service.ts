import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCompteDto } from "src/compte/dto/create-compte.dto";
import { Account, Prisma } from "@prisma/client";


function isExist(id: number): async {
    const accountNumber = await this.prisma.account.findOne({
        where: {
          id_account: id
        }
    });

    // check if account exist
    try {
        if (accountNumber) {
            return true;
        }
    } catch (err) {
        console.log(err.log("Account not found"));
        return false;
    }
}

@Injectable()
export class TransactionService {
  createDepot(createTransactionDto: CreateTransactionDto) {
    // verif que le compte existe
    const account = isExist();

  }

  createRetrait(createTransactionDto: CreateTransactionDto) {
    // verif le solde du compte
    isPositive();

  }

  createVirement(createTransactionDto: CreateTransactionDto) {
    // verif le solde du compte
    ifPositive();
    // verif le compte de destination existe
    isExist();

  }



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
