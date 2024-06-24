-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "truthy" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestChild" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "testId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "TestChild_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TestChild" ADD CONSTRAINT "TestChild_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
